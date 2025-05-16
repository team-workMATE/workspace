import { DataModelId, List, PageContainer } from "@toolpad/core";
import { Employee } from "../../model/Employee";
import { employeeDataSourceList } from "../../data-source/employees";
import React from "react";
import { Order } from "../../model/Order";

type Props = {
    order: Order;
    step: number;
    updateOrderFlow: (order: Order, step: number) => void;
};

const ExployeeList: React.FC<Props> = ({ order, step, updateOrderFlow }) => {
    const handleRowClick = React.useCallback((id: DataModelId) => {
        updateOrderFlow({ ...order, employeeId: id }, step + 1)
    }, []);

    return (
            <List<Employee>
                dataSource={employeeDataSourceList}
                initialPageSize={25}
                onRowClick={handleRowClick}
            />
    );
};

export default ExployeeList;