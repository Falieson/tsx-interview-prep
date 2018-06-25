# TSX Interview Prep

## HOW TO USE

This app is created from [ts-react-app](https://github.com/Falieson/2018-typescript-react-app).

All available commands are found in `./scripts/`, and used with `nps <command>` .

## Topics

### JS Globals

Found at: `src/helpers/globals/`

- [x] forEach
- [x] map
- [x] bind

### JS Demos

Found at: `src/helpers/examples/`

- [x] `leveledConsole` changes console to output "[$level] $message"
- [x]  `calledLC` vs `appliedLC` uses call vs apply
- [ ] replace `console.log` w/ `leveledConsole`
- [ ] shim bind for older browsers
- [ ] func() vs new func()

### JS Utilities

- [ ] debounce
- [ ] iterator
- [ ] queAggregator

### JS Search

- [ ] Merge Sort

### JS Data Structures

- [ ] Single LinkedList
- [ ] Double LinkedList
- [ ] Graph

### React GraphQL Demos

- [ ] Tic-Tac-Toe game  `src/components/TicTacToe/README.md`
- [ ] Minesweeper game

## Utilities

### Que Aggregator

Each time the queAggregator is called in a throttle period the data is aggregated in array.
When the throttle period is over, all the data in the array is passed as an argument to the callback.
