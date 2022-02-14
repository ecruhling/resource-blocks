import { Button, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';

export const ErrorModal = ( props ) => {

	const [ isOpen, setOpen ] = useState( false );
	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );

// The Modal itself
	return (
		<>
			{ isOpen && (
				<Modal { ...props } title="Error" onRequestClose={ closeModal }>
					<Button variant="secondary" onClick={ closeModal }>
						My custom close button
					</Button>
				</Modal>
			) }
		</>
	)
}
