import {FormListContext} from "@/stories/RahsazAdmin/FormListContext";
import {Branch} from "@/interfaces/Branch.interface";
import {branchContext} from "@/components/admin/branch";
import {addProductContext} from "@/components/admin/addProduct";
import {addressCountryContext} from "@/components/admin/addressCountry";
import {addressProvinceContext} from "@/components/admin/addressProvince";
import {addressCityContext} from "@/components/admin/addressCity";
import {iconContext} from "@/components/admin/icon";
import {adminContextConfig} from "@/components/admin";

export function RahsazAdminContext(props: PropsType) {

    const {workspace, section, category, menu, id} = props


    const context = adminContextConfig?.[workspace]?.[section]?.[category]?.[menu]


    if (!context) return null
    return (
        <FormListContext<Branch>
            mode={context.form ? context.table ? "both" : "form" : "list"}
            apiRoute={context.apiRoute}

            editingId={id}

            tableColumns={context.table?.columns}
            enableTrashBox={context.table?.enableTrashBox}

            formTitle={context.form?.title}
            formSchema={context.form?.schema}
            formFields={context.form?.fields}
            formInitialValue={context.form?.initial}
            formRender={context.form?.render}
        />
    )
}


type PropsType = {
    workspace: string;
    section: string;
    category: string;
    menu: string;
    id?: string;
}


