"use client"

import {
    Button,
    Card,
    CardBody,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from "@nextui-org/react";
import {Input, Textarea} from "@nextui-org/input";
import {Chip} from "@nextui-org/chip";

export default function Page() {

    const workspace = "store"
    const section = "product"

    return (
        <>
            <section className="grid grid-cols-6 gap-4 py-4">
                <Card className="col-span-2">
                    <CardBody>
                        <div className="grid gap-4">
                            <Input
                                label="عنوان"
                            />
                            <Input
                                label="شناسه"
                            />
                            <Textarea
                                label="توضیحات"
                            />
                            <Button color="primary">
                                ثبت
                            </Button>
                        </div>
                    </CardBody>
                </Card>

                <Card className="col-span-4">
                    <CardBody>
                        <Table
                            selectionMode="multiple"
                            defaultSelectedKeys={["2", "3"]}
                            color="warning"
                            removeWrapper dir="rtl" aria-label="Example static collection table">
                            <TableHeader>
                                <TableColumn>عنوان</TableColumn>
                                <TableColumn>شناسه یکتا</TableColumn>
                                <TableColumn>توضیحات</TableColumn>
                                <TableColumn>وضعیت</TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1" dir="rtl" className="text-start">
                                    <TableCell>موتور</TableCell>
                                    <TableCell>موتور</TableCell>
                                    <TableCell>این دسته موتور هست</TableCell>
                                    <TableCell>
                                        <Chip className="capitalize" color={"danger"} size="sm" variant="flat">
                                            غیرفعال
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="2" className="text-start">
                                    <TableCell>موتور</TableCell>
                                    <TableCell>موتور</TableCell>
                                    <TableCell>این دسته موتور هست</TableCell>
                                    <TableCell>
                                        <Chip className="capitalize" color={"danger"} size="sm" variant="flat">
                                            غیرفعال
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="3" className="text-start">
                                    <TableCell>موتور</TableCell>
                                    <TableCell>موتور</TableCell>
                                    <TableCell>این دسته موتور هست</TableCell>
                                    <TableCell>
                                        <Chip className="capitalize" color={"danger"} size="sm" variant="flat">
                                            غیرفعال
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="4" className="text-start">
                                    <TableCell>موتور</TableCell>
                                    <TableCell>موتور</TableCell>
                                    <TableCell>این دسته موتور هست</TableCell>
                                    <TableCell>
                                        <Chip className="capitalize" color={"danger"} size="sm" variant="flat">
                                            غیرفعال
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="5" className="text-start">
                                    <TableCell>موتور</TableCell>
                                    <TableCell>موتور</TableCell>
                                    <TableCell>این دسته موتور هست</TableCell>
                                    <TableCell>
                                        <Chip className="capitalize" color={"danger"} size="sm" variant="flat">
                                            غیرفعال
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="6" className="text-start">
                                    <TableCell>موتور</TableCell>
                                    <TableCell>موتور</TableCell>
                                    <TableCell>این دسته موتور هست</TableCell>
                                    <TableCell>
                                        <Chip className="capitalize" color={"danger"} size="sm" variant="flat">
                                            غیرفعال
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="7" className="text-start">
                                    <TableCell>موتور</TableCell>
                                    <TableCell>موتور</TableCell>
                                    <TableCell>این دسته موتور هست</TableCell>
                                    <TableCell>
                                        <Chip className="capitalize" color={"danger"} size="sm" variant="flat">
                                            غیرفعال
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="8" className="text-start">
                                    <TableCell>موتور</TableCell>
                                    <TableCell>موتور</TableCell>
                                    <TableCell>این دسته موتور هست</TableCell>
                                    <TableCell>
                                        <Chip className="capitalize" color={"danger"} size="sm" variant="flat">
                                            غیرفعال
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="9" className="text-start">
                                    <TableCell>موتور</TableCell>
                                    <TableCell>موتور</TableCell>
                                    <TableCell>این دسته موتور هست</TableCell>
                                    <TableCell>
                                        <Chip className="capitalize" color={"danger"} size="sm" variant="flat">
                                            غیرفعال
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="10" className="text-start">
                                    <TableCell>موتور</TableCell>
                                    <TableCell>موتور</TableCell>
                                    <TableCell>این دسته موتور هست</TableCell>
                                    <TableCell>
                                        <Chip className="capitalize" color={"danger"} size="sm" variant="flat">
                                            غیرفعال
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                                <TableRow key="11" className="text-start">
                                    <TableCell>موتور</TableCell>
                                    <TableCell>موتور</TableCell>
                                    <TableCell>این دسته موتور هست</TableCell>
                                    <TableCell>
                                        <Chip className="capitalize" color={"danger"} size="sm" variant="flat">
                                            غیرفعال
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>
            </section>
        </>
    )
}