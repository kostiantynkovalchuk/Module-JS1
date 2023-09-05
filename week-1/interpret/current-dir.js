// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

//(All spaces in the "" line should be ignored. They are purely for formatting.)

const a = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const b = a.lastIndexOf("/");
const c = b.slice(a + 1);
console.log(c);
