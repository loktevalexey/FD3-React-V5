import {EventEmitter} from 'events';

let voteEvents=new EventEmitter(); 
// в потоке voteEvents будут все события, связанные с голосованием
// событие "EAnswerClicked" - кликнут вариант ответа, его сэмиттирует VotesAnswer и примет VotesBlock
// событие "EFreeAnswerTextChanged" - изменён текст свободного ответа, его сэмиттирует VotesAnswer и примет VotesBlock
// лучше работать не с текстовыми литералами, а объявить переменные с соответствующими значениями

export {voteEvents};
