exports.isDatabaseId = (dbId) => {
    return !(!dbId || !(typeof dbId == 'number') || dbId <= 0);
}

exports.isStringNotNull = (string_to_test) => {
    return string_to_test && !(typeof string_to_test == "string");
}
