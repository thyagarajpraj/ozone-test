import * as React from "react";
import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="category" />
            <BooleanField source="commentable" />
        </Datagrid>
    </List>
);

export default PostList;