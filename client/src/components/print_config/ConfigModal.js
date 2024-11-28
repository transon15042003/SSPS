import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ConfigModal({ user_id, user_balance, file_name, file_num_pages, file_config, state, submit_state, support_function }){
    return (
        <Modal show={state} onHide={support_function}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {!submit_state ? 'Chú ý' : 'Thông báo'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!submit_state ? 'Vui lòng điền đầy đủ và chính xác thông tin!' : 'Cấu hình in thành công!'}
            </Modal.Body>
            <Modal.Footer>
                {!submit_state ? (
                    <Button variant="primary" onClick={support_function}>
                        OK
                    </Button>
                ) : (
                    <Link 
                        className = "btn btn-primary"
                        to = '/print/confirm'
                        state = {{
                            user_id: user_id,
                            user_balance: user_balance,
                            name: file_name,
                            num_pages: file_num_pages,
                            config: file_config 
                        }}
                    >
                        OK
                    </Link>
                )}
            </Modal.Footer>
        </Modal>
    );
}

export default ConfigModal;