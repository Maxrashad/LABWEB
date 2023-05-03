import React from 'react';
import { Breadcrumb, Input, QRCode, Space, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';

const ContentCustom = (props: any) => {
const {
token: { colorBgContainer },
} = theme.useToken();
return (
<Content style={{ margin: '0 16px' }}>
<Breadcrumb style={{ margin: '16px 0' }}>
<Breadcrumb.Item>User</Breadcrumb.Item>
<Breadcrumb.Item>Bill</Breadcrumb.Item>
</Breadcrumb>
<div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
<Space direction="vertical" align="center">
<QRCode value={props.text || 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y'} />
<Input
placeholder="Bille Jean is not my lover"
maxLength={60}
value={props.text}
onChange={(e) => props.setText(e.target.value)}
/>
</Space>
</div>
</Content>
);
};

export default ContentCustom;