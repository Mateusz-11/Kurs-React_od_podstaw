const header = <h1 className='title'>Witaj na stronie!</h1>;

const classBig = "big";

const handleClick = () => alert("klik!");

const main = (
	<div>
		<h1 onClick={handleClick} className='red'>
			Pierwszy artykuł
		</h1>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae iste
			similique itaque a sequi provident corporis fuga, neque libero dolore
			quidem iure aliquam mollitia, velit pariatur quos sint iusto culpa?
		</p>
	</div>
);

const text = "Stopkaaa";
const largerTxt = "Lorem ipsum";
const footer = (
	<footer>
		<p className={classBig}>{text}</p>
		{largerTxt}
	</footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
