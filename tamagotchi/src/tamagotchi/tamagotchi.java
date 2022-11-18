package tamagotchi;

public class tamagotchi {
	private boolean sleeping;
	private boolean playing;
	private int poop;
	private int hungry = 50;
	private int energy = 50;
	
	public static void main(String[] args) {
		System.out.println("asd");
		while(1) {
			sleep(1000);
			
		}
	}
	
	public void toBed() {
		if(this.playing) {
			System.out.println("Cant go to bed while playing");
		}else if(this.sleeping) {
			System.out.println("Cant go to bed while sleeping");
		}else {
			this.sleeping=true;
		}
		
		
		if(this.energy<80) {
			System.out.pr
		}
	}
	
	public void toPlay(int game) {
		if(this.playing) {
			System.out.println("Cant play while playing");
		}else if(this.sleeping) {
			System.out.println("Cant play while sleeping");
		}else {
			this.playing=true;
		}
		
	}
	public void toPoop() {
		
		if(this.playing) {
			System.out.println("Cant poop while playing");
		}else if(this.sleeping) {
			System.out.println("Cant poop while sleeping");
		}else if(this.poop<1){
			
		}else{
			this.poop=0;
			System.out.println("Tamagotchi has pooped succesfuly");
		}
		
	}
	public void feed() {
		if(this.playing) {
			System.out.println("Cant poop while playing");
		}else if(this.sleeping) {
			System.out.println("Cant poop while sleeping");
		}else{
			this.hungry = this.hungry+20;
			System.out.println("Tamagotchi has eated succesfuly");
		}
	}
	
	public void die() {
		System.out.println("Tamagotchi died");
	}
	
	public void hungry() {
		
	}
	
}

