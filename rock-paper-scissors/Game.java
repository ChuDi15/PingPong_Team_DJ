
package es.rps;

import java.util.*;



public class Game{

    Move player1; 
    Move player2; 

    private static Hand convertToHand(String s){
        if(s.equals("s") || s.equals("SCISSORS") || s.equals("scissors") ){
            return Hand.SCISSORS;
        }else if(s.equals("r") || s.equals("ROCK") || s.equals("rock") ){
            return Hand.ROCK;
        }else if(s.equals("p") || s.equals("PAPER") || s.equals("paper") ){
            return Hand.PAPER;
        }
        return Hand.ERR;
        
    }
    public static void main(String[] args) {
        Hand h1 = convertToHand(args[0]); 
        Hand h2 = convertToHand(args[1]); 

        if(h1 == Hand.ERR || h2 == Hand.ERR ){
            System.out.println("Error: bad arguments\n==================\n.game <p1 hand> <p2 hand> \n==================\nIntroduce r for Rock, p for Paper and s for Scissors");
        }


        System.out.println("Rock-Paper-Scissor Game!\n==================\nWho wins...?");
        Move player1 = new Move(h1);
        Move player2 = new Move(h2);
        int result = player1.doIWin(player2); 
        if(result== 1){
            System.out.println("Player 1 wins!");
        }else if(result == 0){
            System.out.println("It's a draw!");
        }else{
            System.out.println("Player 2 wins!");
        }
    }
}

enum Hand {
    ROCK,
    PAPER,
    SCISSORS, 
    ERR
}
class Move{
    Hand hand;
    public Move(Hand hand){
        this.hand = hand; 
    }
    public Hand getHand() {
        return this.hand;
    }
    public void setHand(Hand hand) {
        this.hand = hand; 
    }
    public int doIWin(Move move) {
        Hand mHand = move.getHand();
        if(this.hand == Hand.SCISSORS ){
            if(mHand == Hand.PAPER){
                return 1;
            }else if(mHand == Hand.SCISSORS){
                return 0;
            }else{
                return -1; 
            }
        }else if(this.hand == Hand.PAPER){
            if(mHand == Hand.ROCK){
                return 1;
            }else if(mHand == Hand.PAPER){
                return 0;
            }else{
                return -1; 
            }
        }else{
            if(mHand == Hand.SCISSORS){
                return 1;
            }else if(mHand == Hand.ROCK){
                return 0;
            }else{
                return -1; 
            }
        }
    }
}