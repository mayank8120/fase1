import React from 'react'
import {
    CBreadcrumb,
    CBreadcrumbItem, CLink
} from '@coreui/react'

import { withRouter } from "react-router-dom";

const Breadcrumbs = props => {
    const {
        history,
        location: { pathname }
    } = props;
    const pathnames = pathname.split("/").filter(x => x);
    return (
        <div>
            <CBreadcrumb>


                {pathnames.length > 0 ? (
                    <CBreadcrumbItem><CLink onClick={() => history.push("/")}>Home</CLink></CBreadcrumbItem>
                    // <Link onClick={() => history.push("/")}>Home</Link>
                ) : (
                    <CBreadcrumbItem>jdkfHome</CBreadcrumbItem>
                )}

                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    const changed = name.split(" ");

                    for (var i = 0; i < changed.length; i++) {
                        changed[i] = changed[i].charAt(0).toUpperCase() + changed[i].slice(1);
                    }

                    const puttingname = changed.join(" ");

                    return isLast ? (
                        <CBreadcrumbItem key={puttingname}>{puttingname}</CBreadcrumbItem>
                        // <Typography key={name}>{name}</Typography>
                    ) : (
                        // <Link key={name} onClick={() => history.push(routeTo)}>
                        //     {name}
                        // </Link>

                        // <CBreadcrumbItem>{puttingname}</CBreadcrumbItem>
                        <CBreadcrumbItem><CLink key={puttingname} onClick={() => history.push(routeTo)}>{puttingname}</CLink></CBreadcrumbItem>
                    );
                })}




                {/* <CBreadcrumbItem><CLink>Home</CLink></CBreadcrumbItem> */}
                {/* <CBreadcrumbItem>BACDSUDIFH</CBreadcrumbItem>
                <CBreadcrumbItem active>Library</CBreadcrumbItem> */}
            </CBreadcrumb>
        </div>
    )
}


export default withRouter(Breadcrumbs);
