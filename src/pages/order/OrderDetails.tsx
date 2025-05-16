import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { Show } from "@toolpad/core";
import { useState } from "react";
import GridContainer from "../../components/grid/GridContainer";
import { employeeDataSourceSingle } from "../../data-source/employees";
import { softwareDataSourceSingle } from "../../data-source/software";
import { Employee } from "../../model/Employee";
import { Hardware } from "../../model/Hardware";
import { Order } from "../../model/Order";
import { Permission } from "../../model/Permissions";
import { Software } from "../../model/Software";
import { permissionDataSourceSingle } from "../../data-source/Permission";
import { hardwareDataSourceSingle } from "../../data-source/Hardware";

type Props = {
    order: Order;
};

const OrderDetails: React.FC<Props> = ({ order }) => {
    const [tab, setTab] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
    };

    return (
        <TabContext value={tab}>
            <GridContainer centered>
                <TabList onChange={handleChange} centered>
                    <Tab label="Employee" value="1" />
                    <Tab label="Hardware" value="2" />
                    <Tab label="Software" value="3" />
                    <Tab label="Permission" value="4" />
                </TabList>
            </GridContainer>
            <TabPanel value="1">
                <Show<Employee> id={order.employeeId}
                    dataSource={employeeDataSourceSingle} />
            </TabPanel>
            <TabPanel value="2">
                <Show<Hardware> id={order.hardwareId}
                    dataSource={hardwareDataSourceSingle} />
            </TabPanel>
            <TabPanel value="3">
                <Show<Software> id={order.softwareId}
                    dataSource={softwareDataSourceSingle} />
            </TabPanel>
            <TabPanel value="4">
                <Show<Permission> id={order.permissionId}
                    dataSource={permissionDataSourceSingle} />
            </TabPanel>
        </TabContext>

    );
};

export default OrderDetails;