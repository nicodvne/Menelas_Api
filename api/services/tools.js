exports.isDatabaseId = (dbId) => {
    return !(!dbId || !(typeof dbId == 'number') || dbId <= 0);
}
