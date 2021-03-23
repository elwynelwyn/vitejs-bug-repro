import * as React from 'react';

export type ModalSize = any | any | any | any;

export interface ModalProps {
    "data-testid"?: string;
    isOpen?: boolean;
    title?: string;
    onClose?: (...args: any[])=>any;
    children?: React.ReactNode;
    buttons?: React.ReactNode;
    size?: ModalSize;
    hideFooter?: boolean;
}

declare const Modal: React.FC<ModalProps> & {

};

export default Modal;

