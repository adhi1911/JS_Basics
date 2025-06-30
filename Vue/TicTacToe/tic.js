app = Vue.createApp({
    data(){return{
        active: true,
        player: 'X',
        board: Array(9).fill(null),
        winner: '',
        winningCombo:[
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],

        ],
        winningCells:[],
        msg:''
    }},
    methods:{
        makeMove(pos){
            
            if (this.active === true && (this.board[pos] === null || this.winner === '')){
                this.board[pos] = this.player
                this.player = this.player === 'X' ? 'O' : 'X'
            }
            this.checkWinner()
            
        },
        resetGame(){
            this.active = true
            this.board = this.board.map(()=>null)
            this.msg = ''
            this.winningCells = []
        },
        checkWinner(){
            for (const combo of this.winningCombo) {
                const [a, b, c] = combo
                if (
                    this.board[a] &&
                    this.board[a] === this.board[b] &&
                    this.board[a] === this.board[c]
                ) {
                    this.winner = this.board[a]
                    this.winningCells=[a,b,c]
                    this.msg = 'Winner is: '+this.winner
                    this.active = false
                    return;
                }
                
            }
            if (this.board.every(cell => cell != null)){
                this.msg = "It's a draw!"
                this.active = false
            }
        }
    }
});

app.mount('#app');