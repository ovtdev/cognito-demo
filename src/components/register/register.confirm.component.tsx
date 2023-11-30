import "./register.component.css";
import * as React from 'react';
import { Button, Form, Input, Divider } from 'antd';
import {FieldType, onConfirm, onFinishFailed} from "./register.component.helper";
import {RootState, useAppSelector} from "../../store/store";

export const RegisterConfirmComponent = () => {

    const userDataStore = useAppSelector((state: RootState) => state.user);

    return (
        <Form
            name="registerConfirmForm"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={onConfirm}
            onFinishFailed={onFinishFailed}
            initialValues={{username: userDataStore?.username}}
            autoComplete="off"
        >
            <h3>Confirma tu cuenta</h3>
            <Divider />
            <Form.Item<FieldType>
                label="Usuario"
                name="username"
                rules={[{ required: true, message: 'Campo requerido' }]}
            >
                <Input disabled placeholder="Código de confirmación"/>
            </Form.Item>
            <Form.Item<FieldType>
                label="Código: "
                name="confirmCode"
                rules={[{ required: true, message: 'Campo requerido' }]}
            >
                <Input placeholder="Código de confirmación"/>
            </Form.Item>

            <Button className="btn-confirm-register" type="primary" htmlType="submit">
                Aceptar
            </Button>
        </Form>
    );
};
