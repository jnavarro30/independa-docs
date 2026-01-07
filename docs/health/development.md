---
outline: deep
---

# Devices

## Sites

### Monnit

| Type | URL |
| ----------- | ----------- |
| Site | https://www.monnit.com/ |
| Hub | https://tv.independa.com |
| Site | https://portal.independa.com |

### Hardware Info

- A passive infrared sensor (PIR sensor) is an electronic sensor that measures infrared (IR) light radiating from objects in its field of view. They are most often used in PIR-based motion detectors.

They(manufacturers) suggest mounting the PIRs in such a way that the PIR cannot "see" out of a window. Although the wavelength of infrared radiation to which the chips are sensitive does not penetrate glass very well, a strong infrared source (such as from a vehicle headlight or sunlight) can overload the sensor and cause a false alarm. A person moving on the other side of the glass would not be "seen" by the PID.

They also recommended that the PIR not be placed in such a position that an HVAC vent would blow hot or cold air onto the surface of the plastic which covers the housing's window. Although air has very low emissivity (emits very small amounts of infrared energy), the air blowing on the plastic window cover could change the plastic's temperature enough to trigger a false alarms

 

Recommended time to rearm is 60 seconds. 

 

 

1. The link state is separate from both the normal state heartbeat and the Active state heartbeat.  So no changing the heartbeats will not effect the time in link mode.

2. Probably but not guaranteed, the server is not a single threaded instance, it will mostly likely deliver the messages to you in the order they were received if using a single gateway.  if multiple gateways are involved the latency between them and the server will affect the order significantly more.  Each message is sent with a time stamp, the time window is maintained by the gateway, so in a single gateway application the message date time-stamp will define the order explicitly.  Again if multiple gateways are involved than there is no guarantee that their clocks are synchronized exactly.  We only maintain resolution down to one second.

3. I think your seeing a coincidence,  the electronics and even the firmware is identical between them.  Only the power source is different.  So there should be no differences in the radio communications until the batteries die first in the coin cells.

4. Certainly, IR is just a lower frequency in the same electromagnetic spectrum.  Just as light can be reflected by mirrors or transmitted through windows so can IR waves.  However similar to red tinted glass, or blue tinted glass that let certain wave lengths through easier than others, certain materials will allow IR waves to pass easier than others.



Joining requirements.

The sensor ID's must exist in the gateway before joining is allowed.
(Add the sensors to the same network as the gateway, then powercycle the gateway)

The sensors must be a compatible firmware version with the gateway..  for US (900 MHz) all sensors 2.0.0.0 and up are compatible with all gateways 2.0.0.0 and up.

Most common thing we hear is people that are pulling the batteries out and putting them right back in.  there are capacitors on the board that will keep power to the processor for up to 60 seconds after the battery has been removed.  To overcome this, remove the batteries and wait 60 - 90 seconds before putting them back in.