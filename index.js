class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this._created = created;
  }

  get created(){
    return this._created;
  }

  set created(created){
    if(!created || isNaN(created)){
      throw new Error('Invalid created');
    }
    this._created = created;
  }

  toString(){
    return `Mensagem criada em:${this.created} - Conteúdo: ${this.text}`;
  }
}

class ImageMessage extends Message {
  constructor(
    text = '',
    created = Date.now(),
    url = '',
    thumbnail = ''
  ){
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }
  toString(){
    return `Photo${super.toString()}` +
    `- URL: ${this.url}` +
    `- Thumbnail: ${this.thumbnail}`;
  }
}

var text = 'Some text';
var created = Date.now();

var duckTypeMessage = {
  text,
  created
};
console.log(duckTypeMessage);

var emptyMessage = new Message();
var textMessage = new Message('Mensagem de Ontem' , Date.now() - 86400);
var photoMessage = new ImageMessage();

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);

console.log(emptyMessage instanceof ImageMessage);
console.log(duckTypeMessage instanceof ImageMessage);
