/**
 * BLOCK: Hero
 */

/**
 * WordPress dependencies
 */
const {__} = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	Fragment,
	createElement
} = wp.element;

const {
	RichText,
	BlockControls,
	AlignmentToolbar,
} = wp.editor;

/**
 * Internal dependencies
 */

import './style.scss';

const blockAttributes = {
	heading: {source: "children", selector: ".hero__heading"},
	text: {source: "children", selector: ".hero__text"},
	alignment: {type: "string"},
	position: {type: "string", default: "left"},
	width: {type: "number", default: 500},
	headingColor: {type: "string"},
	textColor: {type: "string"},
	buttonColor: {type: "string", default: "#ffffff"},
	showButton: {type: "bool", default: !0},
	buttonBackgroundColor: {type: "string", default: "#bc0d0d"},
	buttonText: {type: "string", default: "Click Here"},
	buttonURL: {type: "string", default: ""}
};

export const name = 'resource-blocks/hero';

export const settings = {
	title: __('Hero'),
	description: __('A block to display a full-width hero with overlayed text or buttons.'),
	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,0h24v24H0V0z" fill="none"/>
		<path
			d="M21,4H3C1.9,4,1,4.9,1,6v12c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V6C23,4.9,22.1,4,21,4z M21,18H3V6h18V18z"/>
		<polygon points="14.5 11 11 15.51 8.5 12.5 5 17 19 17"/>
	</svg>,
	category: 'resource-blocks',
	keywords: [__('images'), __('photos')],
	attributes: blockAttributes,
	edit({attributes, className, focus, setAttributes}) {
		const {alignment, width, heading} = attributes;
		const style = {textAlign: alignment, maxWidth: `${width}px`};

		function onChangeAlignment(updatedAlignment) {
			setAttributes({alignment: updatedAlignment});
		}

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar value={alignment}
									  onChange={onChangeAlignment}>
					</AlignmentToolbar>
				</BlockControls>
				<div className={className}>
					<div className={`inner`} style={style}>
						<RichText>
							{heading}
						</RichText>
					</div>
				</div>
			</Fragment>
		);
	},
	save({attributes, className}) {
		const {alignment, width, heading} = attributes;
		const style = {textAlign: alignment, maxWidth: `${width}px`};

		return (
			<div className={className}>
				<div className={`inner`} style={style}>
					<RichText>
						<h2 className={`hero__heading`}>
							{heading}
						</h2>
					</RichText>
				</div>
			</div>
		);
	},
};

registerBlockType(name, settings);
