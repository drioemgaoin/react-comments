import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.css';

import Comment from './components/Comment';

const comments = [
  { id: 1, author: 'Romain Diegoni', date: moment('2017-04-07 14:39'), content: 'My first comment\r\nYes it is', avatar: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12274397_10153300194303182_4698046983774435570_n.jpg?oh=726bc8cb8f6ac28c1858d55baef4e0ac&oe=595D3017' },
  { id: 2, author: 'Jerome Saint-Pierre', date: moment('2017-04-07 15:39'), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim deditum voluptatibus, quem cupiditatum incendiis inflammatum in iis potiendis, quae acerrime concupivisset, tanta laetitia perfundi arbitramur, quanta aut superiorem Africanum Hannibale victo aut posteriorem Karthagine eversa? Nam cum appetitus ille animi aliquid ad se trahere coeperit consulto, quod sibi obsit, quia-sit sibi inimicus, cum id sua causa faciet, et oderit se et simul diliget, quod fieri non potest. An quae de prudentia, de cognitione rerum, de coniunctione generis humani, quaeque ab eisdem de temperantia, de modestia, de magnitudine animi, de omni honestate dicuntur? Atque etiam valítudinem, vires, vacuitatem doloris non propter utilitatem solum, sed etiam ipsas propter se expetemus. Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis. Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M. Duo Reges: constructio interrete. Id enim ille summum bonum eu)qumi/an et saepe a)qambi/an appellat, id est animum terrore liberum. Tenere autem virtutes eas ipsas, quarum modo feci mentionem, nemo poterit, nisi statuerit nihil esse, quod intersit aut differat aliud ab alio, praeter honesta et turpia. Tenuis Lucius Verginius unusque de multis sexagesimo anno post libertatem receptam virginem filiam sua manu occidit potius, quam ea Ap. Sic exclusis sententiis reliquorum cum praeterea nulla esse possit, haec antiquorum valeat necesse est. Nam nisi hoc optineatur, id solum bonum esse, quod honestum sit, nullo modo probari possit beatam vitam virtute effici. Non enim in ipsa sapientia positum est beatum esse, sed in iis rebus, quas sapientia comparat ad voluptatem. Qua exposita scire cupio quae causa sit, cur Zeno ab hac antiqua constitutione desciverit, quidnam horum ab eo non sit probatum;' }
];

ReactDOM.render(
    <Comment comments={comments} displayForm={true} />,
document.getElementById('main'));
