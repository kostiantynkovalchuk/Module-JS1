const filePath = "/Users/mitchlloyd/cyf/modules/Module-JS1/week-1/expressions";
const lastSlashIndex = filePath.lastIndexOf("/");
const currentDirectory = filePath.slice(lastSlashIndex + 1);
console.log(currentDirectory);
