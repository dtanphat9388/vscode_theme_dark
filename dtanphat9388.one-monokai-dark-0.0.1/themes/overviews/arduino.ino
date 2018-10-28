const int pin10 = 10;

void setup()
{
  pinMode(pin10, HIGH);
  start();
  write(0x12, 045);
}

void loop()
{

}