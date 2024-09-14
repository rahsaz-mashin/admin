import {SubMenu} from "@/stories/RahsazAdmin/SubMenu";

export default function Page({params}: PropsType) {
    return <SubMenu {...params} />
}


type PropsType = {
    params: {
        workspace: string;
        section: string;
        category?: string;
    }
}