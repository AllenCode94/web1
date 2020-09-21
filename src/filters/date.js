import fillzero from './fillzero.js'
export default time => {
	let d = new Date();
	d.setTime(time);
	let year = d.getFullYear();
	let mon = d.getMonth() + 1;
	let day = d.getDate();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	return `${year}-${fillzero(mon)}-${fillzero(day)} ${fillzero(h)}:${fillzero(m)}:${fillzero(s)}`;
}
