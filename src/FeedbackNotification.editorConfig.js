import { hidePropertiesIn } from "@mendix/pluggable-widgets-tools";

export function getProperties(
    _values,
    defaultProperties /* , target: Platform*/
) {
    switch (_values.displayType) {
        case "SIMPLE": {
            hidePropertiesIn(defaultProperties, _values, ["customContent"]);
            break;
        }
        case "CUSTOM": {
            hidePropertiesIn(defaultProperties, _values, ["notificationText"]);
            break;
        }
    }
    return defaultProperties;
}

export function check(_values) {
    const errors = [];

    return errors;
}

export const getPreview = (_values, isDarkMode) => {
    const mainContent = {
        type: "RowLayout",
        columnSize: "grow",
        backgroundColor: _values.readOnly ? (isDarkMode ? "#505050" : "#D3D3D3") : isDarkMode ? "#252525" : "#FFFFFF",
        borders: true,
        borderWidth: 1,
        borderRadius: 1,
        children: [
            {
                type: "Container",
                padding: 4,
                grow: 0,
                children: [
                    {
                        type: "Image",
                        width: 20,
                        height: 20,
                        data: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQcSURBVHgB7ZvhUdswFMf/CgntlS/ZoGYC0glqJihMUJgAGIEJgAmgEwATxJ0g6QRxN0jvyl0PCO57teg5jmzJtmQ7Jr87XexIiawn6em9JxnYsGHDW0agBt4j8haAT5d7VKEXASNKQ7oevpah+zndh3Q5pzSl6+89+vwDEWIdoUb7A0QXlGaUogqJf3+9g2iEdYAe9ojSuGKjs9KE/x9tRPb4bOCm4apRcQQLVNYBcn5fI57jtUIPf0d64qyKnuihAtQLJ8/ABA00niHFeUDCn7xDdIqSlB4BrODoo3TFDrh8gjhDQQoLYIho+ADcoqFez4OnxCNwTFfzAr8xRzZ+TJdtXpKmT8C+qRAK6YDfsbJr+3o8GsQj1AhjAfCcp+FygPXAlzpKi5EAWNujXQrPhFOT1UGrA3id56UuabdbJGD7n5YzD26U6nwL+FTJn9hGdGvbkuvTf7JCTdbDgnZRF5vlKIu06603HjULnM30rPqERgAzxMPTGjQkd/OGpDStZ7BLSEbSriojUwlKZ8ODXQLdfJT5U9jFy3Ke8laBE1iGhtsvw3Ih7PNV9aVSAIM4+GDd4CFt/9GwnIsVx1fpgqwRYL33JSOe43kFZL4PBywUhlyWAHw4QsYOSudX5Ev6ixUByB7w4A42U8fpkcD3cs324Q4vXW8/XYI8qVGlKIkZPi911GDW9uy1DRc1OVkyOn3zer8igF69fn4TnuVSnX1FgT24I9TkD+FmBfiPSE3vfsZDuKj48BHiLq+MtAIncCiEKNXBqunuwQE9A+tOWoHG4aySLAm3pyvQQbQCeFPUKQAPLUQlACdzkC086esbxeocstS+2gSAeFucbfGmA6th8mZFAMK+L9428kcA9dJPdJsfyRvVFOj0CKARHiTvVwSwlSrQNdIG2YoApDUWooNwqC0dk8yyA+5hH1Y+gdCMMKmEAxdxwUhRtzIsTrF7X8S7wNbYph2aBwhj/VLXMyhHwDNEAMu6YFHQvujbHwFTVQfkmcLf0C2uVF9mCoB2Um5ER5ShiHeGblR5uc7Qy7/jJtbwihR+sRguI+V3npWn3R63HKkNDMuxz25FAPG5IXGYk59PHWEqh2jPB2jjAfLH51hPznWbscanxGhdvhTutsxccEWKr/oRmSQ17NzYIqDG75sULBQSo10jViat9hbZlN6Jn9OIgjFBMY8PIbbWYww+0PPNC5wULREUZSGI/SjDsmoQnvOFGs+Ujgo/xwqGDye73sjQwfWfmSg8FaVPi7/CdgJZbRdRM8HOgNb541a8V8SHkLZremOE6+nnHH1rFHm2cOKo8eOB5XeGKk+BLORBq1Oq4HNUbVcopHRP/3En4xRWcSaAJKwn5MkTH/H2NPsVHpb9C1Zm/O7gVIbmp1sG5wo3bNhQib+8cqmD2j86WgAAAABJRU5ErkJggg=="
                    }
                ]
            },
            {
                type: "RowLayout",
                padding: 4,
                columnSize: "grow",
                grow: 1,
                children: [
                    {
                        type: "Text",
                        fontColor: isDarkMode ? "#579BF9" : "#146FF4",
                        content: getCustomCaption(_values)
                    }
                ]
            }
        ]
    };
    const customContent = {
        type: "RowLayout",
        columnSize: "fixed",
        borders: true,
        children: [
            {
                type: "DropZone",
                property: _values.customContent,
                placeholder: "Place your custom notification content here"
            }
        ]
    };

    return {
        type: "Container",
        children: [mainContent, ...(_values.displayType === "CUSTOM" ? [customContent] : [])]
    };
};

export function getCustomCaption(_values) {
    return "Feedback Notification";
}
