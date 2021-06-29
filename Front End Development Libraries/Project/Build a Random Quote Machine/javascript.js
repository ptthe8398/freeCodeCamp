// csv courtesy of kyledhebert: https://raw.githubusercontent.com/kyledhebert/mitch-hedberg-rest/master/src/main/resources/mitch_jokes.csv
const hedberg = [{
  content:"Life isn’t about getting and having, it’s about giving and being.", 
  author:"Kevin Kruse"
},{
  content:"Whatever the mind of man can conceive and believe, it can achieve.", 
  author:"Napoleon Hill"
},{
  content:"Strive not to be a success, but rather to be of value.", 
  author:"Albert Einstein"
},{
  content:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", 
  author:"Robert Frost"
},{
  content:"I attribute my success to this: I never gave or took any excuse.", 
  author:"Florence Nightingale"
},{
  content:"You miss 100% of the shots you don’t take.", 
  author:"Wayne Gretzky"
},{
  content:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", 
  author:"Michael Jordan"
},{
  content:"The most difficult thing is the decision to act, the rest is merely tenacity.", 
  author:"Amelia Earhart"
},{
  content:"Every strike brings me closer to the next home run.", 
  author:"Babe Ruth"
},{
  content:"Definiteness of purpose is the starting point of all achievement.", 
  author:"W. Clement Stone"
},{
  content:"We must balance conspicuous consumption with conscious capitalism.", 
  author:"Kevin Kruse"
},{
  content:"Life is what happens to you while you’re busy making other plans.",
  author:"John Lennon"
},{
  content:"We become what we think about.", 
  author:"Earl Nightingale"
},{
  content:"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", 
  author:"Mark Twain"
},{
  content:"Life is 10% what happens to me and 90% of how I react to it.", 
  author:"Charles Swindoll"
},{
  content:"The most common way people give up their power is by thinking they don’t have any.", 
  author:"Alice Walker"
},{
  content:"The mind is everything. What you think you become.", 
  author:"Buddha"
},{
  content:"The best time to plant a tree was 20 years ago. The second best time is now.", 
  author:"Chinese Proverb"
},{
  content:"An unexamined life is not worth living.", 
  author:"Socrates"
},{
  content:"Eighty percent of success is showing up.", 
  author:"Woody Allen"
},{
  content:"Your time is limited, so don’t waste it living someone else’s life.", 
  author:"Steve Jobs"
},{
  content:"Winning isn’t everything, but wanting to win is.",
  author:"Vince Lombardi"
},{
  content:"I am not a product of my circumstances. I am a product of my decisions.", 
  author:"Stephen Covey"
},{
  content:"Every child is an artist.  The problem is how to remain an artist once he grows up.", 
  author:"Pablo Picasso"
},{
  content:"You can never cross the ocean until you have the courage to lose sight of the shore.", 
  author:"Christopher Columbus"
},{
  content:"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", 
  author:"Maya Angelou"
},{
  content:"Either you run the day, or the day runs you.", 
  author:"Jim Rohn"
},{
  content:"Whether you think you can or you think you can’t, you’re right.", 
  author:"Henry Ford"
},{
  content:"The two most important days in your life are the day you are born and the day you find out why.", 
  author:"Mark Twain"
},{
  content:"Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.", 
  author:"Johann Wolfgang von Goethe"
},{
  content:"The best revenge is massive success.", 
  author:"Frank Sinatra"
},{
  content:"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.", 
  author:"Zig Ziglar"
},{
  content:"Life shrinks or expands in proportion to one’s courage.", 
  author:"Anais Nin"
},{
  content:"If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", 
  author:"Vincent Van Gogh"
},{
  content:"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", 
  author:"Aristotle"
},{
  content:"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", 
  author:"Jesus"
},{
  content:"The only person you are destined to become is the person you decide to be.", 
  author:"Ralph Waldo Emerson"
},{
  content:"Go confidently in the direction of your dreams.  Live the life you have imagined.", 
  author:"Henry David Thoreau"
},{
  content:"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", 
  author:"Erma Bombeck"
},{
  content:"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", 
  author:"Booker T. Washington"
},{
  content:"Certain things catch your eye, but pursue only those that capture the heart.", 
  author:" Ancient Indian Proverb"
},{
  content:"Believe you can and you’re halfway there.", 
  author:"Theodore Roosevelt"
},{
  content:"Everything you’ve ever wanted is on the other side of fear.", 
  author:"George Addair"
},{
  content:"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", 
  author:"Plato"
},{
  content:"Teach thy tongue to say, “I do not know,” and thous shalt progress.", 
  author:"Maimonides"
},{
  content:"Start where you are. Use what you have.  Do what you can.", 
  author:"Arthur Ashe"
},{
  content:"When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.", 
  author:"John Lennon"
},{
  content:"Fall seven times and stand up eight.", 
  author:"Japanese Proverb"
},{
  content:"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", 
  author:"Helen Keller"
},{
  content:"Everything has beauty, but not everyone can see.", 
  author:"Confucius"
},{
  content:"How wonderful it is that nobody need wait a single moment before starting to improve the world.", 
  author:"Anne Frank"
},{
  content:"When I let go of what I am, I become what I might be.", 
  author:"Lao Tzu"
},{
  content:"Life is not measured by the number of breaths we take, but by the moments that take our breath away.", 
  author:"Maya Angelou"
},{
  content:"Happiness is not something readymade.  It comes from your own actions.", 
  author:"Dalai Lama"
},{
  content:"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.", 
  author:"Sheryl Sandberg"
},{
  content:"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.", 
  author:"Aristotle"
},{
  content:"If the wind will not serve, take to the oars.", 
  author:"Latin Proverb"
},{
  content:"You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.", 
  author:"Unknown"
},{
  content:"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.", 
  author:"Marie Curie"
},{
  content:"Too many of us are not living our dreams because we are living our fears.", 
  author:"Les Brown"
},{
  content:"Challenges are what make life interesting and overcoming them is what makes life meaningful.", 
  author:"Joshua J. Marine"
},{
  content:"If you want to lift yourself up, lift up someone else.", 
  author:"Booker T. Washington"
},{
  content:"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", 
  author:"Leonardo da Vinci"
},{
  content:"Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.", 
  author:"Jamie Paolinetti"
},{
  content:"You take your life in your own hands, and what happens? A terrible thing, no one to blame.", 
  author:"Erica Jong"
},{
  content:"What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.", 
  author:"Bob Dylan"
},{
  content:"I didn’t fail the test. I just found 100 ways to do it wrong.", 
  author:"Benjamin Franklin"
},{
  content:"In order to succeed, your desire for success should be greater than your fear of failure.", 
  author:"Bill Cosby"
},{
  content:"A person who never made a mistake never tried anything new.", 
  author:" Albert Einstein"
},{
  content:"The person who says it cannot be done should not interrupt the person who is doing it.", 
  author:"Chinese Proverb"
},{
  content:"There are no traffic jams along the extra mile.", 
  author:"Roger Staubach"
},{
  content:"It is never too late to be what you might have been.",
  author:"George Eliot"
},{
  content:"You become what you believe.", 
  author:"Oprah Winfrey"
},{
  content:"I would rather die of passion than of boredom.", 
  author:"Vincent van Gogh"
},{
  content:"A truly rich man is one whose children run into his arms when his hands are empty.", 
  author:"Unknown"
},{
  content:"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.", 
  author:"Ann Landers"
},{
  content:"If you want your children to turn out well, spend twice as much time with them, and half as much money.", 
  author:"Abigail Van Buren"
},{
  content:"Build your own dreams, or someone else will hire you to build theirs.", 
  author:"Farrah Gray"
},{
  content:"The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.", 
  author:"Jesse Owens"
},{
  content:"Education costs money.  But then so does ignorance.", 
  author:"Sir Claus Moser"
},{
  content:"I have learned over the years that when one’s mind is made up, this diminishes fear.", 
  author:"Rosa Parks"
},{
  content:"It does not matter how slowly you go as long as you do not stop.",
  author:"Confucius"
},{
  content:"If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", 
  author:"Oprah Winfrey"
},{
  content:"Remember that not getting what you want is sometimes a wonderful stroke of luck.", 
  author:"Dalai Lama"
},{
  content:"You can’t use up creativity.  The more you use, the more you have.", 
  author:"Maya Angelou"
},{
  content:"Dream big and dare to fail.", 
  author:"Norman Vaughan"
},{
  content:"Our lives begin to end the day we become silent about things that matter.", 
  author:"Martin Luther King Jr."
},{
  content:"Do what you can, where you are, with what you have.", 
  author:"Teddy Roosevelt"
},{
  content:"If you do what you’ve always done, you’ll get what you’ve always gotten.", 
  author:"Tony Robbins"
},{
  content:"Dreaming, after all, is a form of planning.", 
  author:"Gloria Steinem"
},{
  content:"It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.", 
  author:"Mae Jemison"
},{
  content:"You may be disappointed if you fail, but you are doomed if you don’t try.", 
  author:"Beverly Sills"
},{
  content:"Remember no one can make you feel inferior without your consent.", 
  author:"Eleanor Roosevelt"},
{
  content:"Life is what we make it, always has been, always will be.", 
  author:"Grandma Moses"
},{
  content:"The question isn’t who is going to let me; it’s who is going to stop me.", 
  author:"Ayn Rand"
},{
  content:"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", 
  author:"Henry Ford"
},{
  content:"It’s not the years in your life that count. It’s the life in your years.", 
  author:"Abraham Lincoln"
},{
  content:"Change your thoughts and you change your world.", 
  author:"Norman Vincent Peale"
},{
  content:"Either write something worth reading or do something worth writing.", 
  author:"Benjamin Franklin"
},{
  content:"Nothing is impossible, the word itself says, “I’m possible!”", 
  author:"–Audrey Hepburn"
},{
  content:"The only way to do great work is to love what you do.", 
  author:"Steve Jobs"
},{
  content:"If you can dream it, you can achieve it.", 
  author:"Zig Ziglar"
}]

const replacer = match => {

return Array(match.length + 1).join('*')
}

const filtered = hedberg.map(({ content, author }) => {
  return { content, author }
})

const randomQuote = () => Math.floor(Math.random() * filtered.length)

const styles = {
quoteBox: {
  maxWidth: 600,
  minWidth: 360,
  padding: 30
},
img: {
  height: 'auto',
  margin: 0,
  maxWidth: '100%'
},
cite: {
  display: 'block',
  fontWeight: 200,
  margin: 40,
  textAlign: 'right'
},
actions: {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '50px 40px'
},
btn: {
  backgroundColor: '#e68935',
  border: 'none',
  borderRadius: 5,
  color: '#222326',
  outline: 0,
  padding: '10px 15px',
  textDecoration: 'none'
},
cred: {
  color: 'rgba(255, 255, 255, 0.29)',
  display: 'block',
  fontSize: 15,
  margin: '50px 40px',
  textAlign: 'right'
},
link: {
  color: 'rgba(255, 255, 255, 0.29)'
}
}

const QuoteMachine = () => (
<QuoteBox />
)

class QuoteBox extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    fadeIn: false,
    quote: '',
    author: ''
  }
  this.newQuote = this.newQuote.bind(this)
}
 
componentDidMount = () => {
  let quote = filtered[randomQuote()]
  this.setState(() => ({
    fadeIn: true,
    quote: quote.content,
    author: quote.author
  }))
}

newQuote = () => {    
  let quote = filtered[randomQuote()]
  this.setState((prevState) => ({
    fadeIn: false,
    quote: prevState.quote === quote.content ? this.newQuote() : quote.content,
    author: quote.author
  }))
}
addFade = () => {
  this.setState(() => ({ fadeIn: true }))
}
render () {
  
  const { fadeIn } = this.state
  
  let fadeClasses = []
  
  if (fadeIn) {
    fadeClasses.push('fadeIn')
  } else {
    fadeClasses = []
    this.addFade()
  }
  
  return (
    <div style={styles.quoteBox} id='quote-box'>
      
      {fadeIn && <blockquote className={fadeClasses.join(' ')} dangerouslySetInnerHTML={{__html: this.state.quote}} id='text' />}
      
      <cite style={styles.cite} id='author'>- {this.state.author}</cite>
      
      <div style={styles.actions}>
        <a href={encodeURI(`https://twitter.com/intent/tweet?related=freecodecamp&hashtags=quote,mitchhedberg&text=${this.state.quote}`)} 
        style={styles.btn} className='tweet-btn' target='_blank' id='tweet-quote'><i class="fa fa-twitter"></i>
</a>
        <button style={styles.btn} className='new-btn' onClick={this.newQuote} id='new-quote'>New Quote</button>
      </div>
      
    </div>
  )
}
}

ReactDOM.render(<QuoteMachine />, document.getElementById('app'))