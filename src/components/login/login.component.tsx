import "./login.component.css";
import * as React from 'react';
import {Button, Form, Input, Divider} from 'antd';
import {FieldType, onFinish, onFinishFailed, onRegister} from "./login.component.helper";

export const LoginComponent = () => {
    return (
        <Form
            name="loginForm"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            title="Login"
        >
            <h3>Login</h3>
            <Divider />
            <Form.Item<FieldType>
                label="Usuario"
                name="username"
                rules={[{ required: true, message: 'Campo requerido' }]}
            >
                <Input placeholder="Usuario"/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Contraseña"
                name="password"
                rules={[{ required: true, message: 'Campo requerido' }]}
            >
                <Input.Password placeholder="Contraseña"/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Aceptar
                </Button>
                <Button className="btn-register" onClick={onRegister} type="link">Registrar</Button>
            </Form.Item>
        </Form>
    );
};
