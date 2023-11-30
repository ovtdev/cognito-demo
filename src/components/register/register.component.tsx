import "./register.component.css";
import * as React from 'react';
import { Button, Form, Input, Divider } from 'antd';
import {FieldType, onFinish, onFinishFailed, onLogin} from "./register.component.helper";

export const RegisterComponent = () => {

    return (
        <Form
            name="registerForm"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            title="Registro"
        >
            <h3>Registro</h3>
            <Divider />
            <Form.Item<FieldType>
                label="Nombre"
                name="name"
                rules={[{ required: true, message: 'Campo requerido' }]}
            >
                <Input placeholder="Nombre"/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Correo"
                name="email"
                rules={[{ required: true, message: 'Campo requerido' }]}
            >
                <Input placeholder="Correo electrónico"/>
            </Form.Item>

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
                <Button className="btn-register" onClick={onLogin} type="link">Login</Button>
            </Form.Item>
        </Form>
    );
};
