import Card from "@mui/material/Card";
import CenteredCardHeader from "../components/card/CenteredCardHeader";
import { CardContent } from "@mui/material";
import { useState } from "react";
import InlineTextField from "../components/text/InlineTextField";
import ContactCard from "./ContactCard";
import ApplicationsCard from "./ApplicationsCard";
import NextStepsCard from "./NextSteps";

type Props = {
    step: number;
};

const MultiStepCard: React.FC<Props> = ({step}) => {

    switch (step) {
        case 1:
            return <ContactCard />
        case 2:
            return <ApplicationsCard />
        case 3:
            return <NextStepsCard />
        default:
            return <ContactCard />
    }
};

export default MultiStepCard;