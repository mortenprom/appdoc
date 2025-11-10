neptune.Shell.attachInit((data) => {
    AppCache.Load("prom_appdoc_servant", {
        parentObject: parentMaster,
        enableDoc: true,
    });
});