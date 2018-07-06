import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { weightedVoronoi } from 'd3-weighted-voronoi';
import { interpolateViridis } from 'd3-scale-chromatic';

import { Canvas } from './canvas.styled';

export default class VoronoiCanvas extends Component {
	static propTypes = {
		image: PropTypes.instanceOf(Image),
	}

	componentDidUpdate(lastProps) {
		if (this.props.image !== lastProps.image) {
			this.updateCanvas();
		}
	}

	onCanvas = (canvas) => {
		this._canvas = canvas;
		this._context = canvas ? canvas.getContext('2d') : null;
	}

	updateCanvas() {
		const { image } = this.props;
		const { width, height } = image;

		const canvas = this._canvas;
		canvas.width = width;
		canvas.height = height;

		const context = this._context;
		context.lineWidth = 0;

		const points = [
			{ x: 4600, y: 1450, level: 0 },
			{ x:  500, y:  347, level: 0 },
			{ x:  200, y: 1685, level: 0 },
			{ x:  100, y: 2174, level: 0 },
			{ x: 3723, y:  239, level: 0 },
			{ x:  800, y: 2900, level: 0 },
			{ x: 4671, y: 2810, level: 0 },
			{ x: 4080, y: 1020, level: 0 },
			{ x: 3893, y: 2691, level: 0 },

			{ x: 4817, y: 1824, level: 1 }, // A
			{ x: 4698, y: 1692, level: 1 }, // B
			{ x: 3046, y: 1389, level: 4 }, // B
			{ x: 4628, y: 1916, level: 1 }, // C
			{ x: 4439, y: 2267, level: 3 }, // D
			{ x: 3897, y: 2179, level: 3 }, // D
			{ x: 3899, y: 1925, level: 3 }, // E
			{ x: 3406, y: 2346, level: 3 }, // F
			{ x: 3231, y: 1959, level: 3 }, // G
			{ x: 3035, y: 1734, level: 3 }, // H
			{ x: 3050, y: 1545, level: 4 }, // I
			{ x: 3518, y:  974, level: 4 }, // I2
			{ x: 3423, y: 1647, level: 9 }, // J
			{ x: 3631, y: 1700, level: 9 }, // K
			{ x: 2080, y:  808, level: 5 }, // L: can honestly do it at level 1
			{ x: 1663, y:  529, level: 5 }, // M: need level 9 or scroll to cure him
			{ x: 2011, y:  391, level: 5 }, // M: need level 9 or scroll to cure him
			{ x: 2436, y:  473, level: 5 }, // M: need level 9 or scroll to cure him
			{ x: 2765, y:  459, level: 5 }, // M: need level 9 or scroll to cure him
			{ x: 2976, y:  521, level: 5 }, // M: need level 9 or scroll to cure him
			{ x: 2009, y: 1143, level: 4 }, // N
			{ x: 2430, y: 1308, level: 4 }, // O
			{ x: 1779, y: 1180, level: 4 }, // P
			{ x: 1427, y: 1215, level: 4 }, // P2
			{ x: 1655, y: 1612, level: 7 }, // Q
			{ x: 1080, y: 1857, level: 7 }, // Q
			{ x: 1100, y: 1081, level: 4 }, // R
			{ x:  644, y:  987, level: 5 }, // S
			{ x: 1242, y: 2457, level: 8 }, // T
			{ x: 1660, y: 1937, level: 8 }, // U
			{ x: 1256, y:  862, level: 6 }, // V
			{ x:  585, y: 1533, level: 5 }, // W
			{ x: 1683, y: 2701, level: 9 }, // X
			{ x: 2975, y: 2726, level: 9 }, // X2
			{ x:  363, y: 2044, level: 6 }, // Y
			{ x:  900, y:  727, level: 7 }, // Z
		];

		const voronoi = weightedVoronoi()
			.weight(d => Math.pow(10, d.weight || 1))
			.clip([
				[ context.lineWidth, context.lineWidth ],
				[ context.lineWidth, height - context.lineWidth ],
				[ width - context.lineWidth, height - context.lineWidth ],
				[ width - context.lineWidth, context.lineWidth ],
			])
		;

		const cells = voronoi(points);

		for (const path of cells) {
			drawPath(context, path, path.site.originalObject);
			false && drawPoint(context, path.site.originalObject);
		}
	}

	render() {
		return (
			<Canvas innerRef={this.onCanvas} />
		);
	}
}

function drawPoint(context, point) {
	context.fillStyle = 'blue';

	context.beginPath();
	context.arc(point.x, point.y, context.lineWidth * 2, 0, Math.PI * 2);
	context.closePath();

	context.fill();
}

function drawPath(context, path, site) {
	if (!site.level) {
		return;
	}

	context.fillStyle = interpolateViridis((site.level - 1) / (9 - 1));

	context.beginPath();
	context.moveTo(path[0][0], path[0][1]);
	for (const [ x, y ] of path) {
		context.lineTo(x, y);
	}
	context.lineTo(path[0][0], path[0][1]);
	context.closePath();

	context.fill();
}
