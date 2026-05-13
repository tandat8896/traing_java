let user = null;

let name = user?.profile?.name ?? "Guest";

console.log(name)
// user?.profile?.name
// ↓
// undefined
// ↓
// ?? "Guest"
// ↓
// Guest;
