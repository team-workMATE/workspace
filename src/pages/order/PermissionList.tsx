import { DataModelId, List, PageContainer } from "@toolpad/core";
import React from "react";
import { Order } from "../../model/Order";
import { Permission } from "../../model/Permissions";
import { permissionDataSourceList } from "../../data-source/Permissions";

type Props = {
    order: Order;
    step: number;
    updateOrderFlow: (order: Order, step: number) => void;
};

const PermissionList: React.FC<Props> = ({order, step, updateOrderFlow}) => {
    const handleRowClick = React.useCallback((id: DataModelId) => {
        updateOrderFlow({...order, permissionId: id}, step + 1)
    }, []);

    return (
            <List<Permission>
                dataSource={permissionDataSourceList}
                initialPageSize={25}
                onRowClick={handleRowClick}
            />
    );
};

export default PermissionList;