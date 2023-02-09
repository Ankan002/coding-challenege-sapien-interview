const TableHead = () => {
    return (
        <thead>
            <tr>
                <th
                    scope="col text-center"
                    style={{
                        textAlign: "center",
                    }}
                >
                    Lead Date
                </th>
                <th
                    scope="col text-center"
                    style={{
                        textAlign: "center",
                    }}
                >
                    Name
                </th>
                <th
                    scope="col text-center"
                    style={{
                        textAlign: "center",
                    }}
                >
                    Email
                </th>
                <th
                    scope="col text-center"
                    style={{
                        textAlign: "center",
                    }}
                >
                    Source
                </th>
                <th
                    scope="col text-center"
                    style={{
                        textAlign: "center",
                    }}
                >
                    Last Updated
                </th>
                <th
                    scope="col text-center"
                    style={{
                        textAlign: "center",
                    }}
                >
                    Status
                </th>
                <th
                    scope="col text-center"
                    style={{
                        textAlign: "center",
                    }}
                ></th>
            </tr>
        </thead>
    );
};

export default TableHead;
