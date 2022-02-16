/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n'
import { Button, Placeholder, ExternalLink } from '@wordpress/components'
import { BlockIcon } from '@wordpress/block-editor'

const EmbedPlaceholder = ({
														icon,
														label,
														value,
														onSubmit,
														onChange,
														cannotEmbed,
														fallback,
														tryAgain,
													}) => {
	return (
		<Placeholder
			icon={<BlockIcon icon={icon} showColors/>}
			label={label}
			className="wp-block-embed"
			instructions={__(
				'URL to the Vimeo video.'
			)}
		>
			<form onSubmit={onSubmit}>
				<input
					type="url"
					value={value || ''}
					className="components-placeholder__input"
					aria-label={label}
					placeholder={__('Enter Vimeo URL to embed here…')}
					onChange={onChange}
				/>
				<Button variant="primary" type="submit">
					{_x('Embed', 'button label')}
				</Button>
			</form>
			{cannotEmbed && (
				<div className="components-placeholder__error">
					<div className="components-placeholder__instructions">
						{__('Sorry, this content could not be embedded.')}
					</div>
					<Button variant="secondary" onClick={tryAgain}>
						{_x('Try again', 'button label')}
					</Button>{' '}
					<Button variant="secondary" onClick={fallback}>
						{_x('Convert to link', 'button label')}
					</Button>
				</div>
			)}
		</Placeholder>
	)
}

export default EmbedPlaceholder
