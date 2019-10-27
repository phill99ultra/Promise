1) concurrency / asynchronuous programming
* primitives:
 1 callback
 2 event loop
 3 promises
  * generator functions(*, yield)
 4 async/await
 2) Exceptions / try / catch

 exception - type of error -> catch 
           - type of error while running code
           - (source data is not accessible,
              values transformations, memory errors...)
           - throw XXXX
function a() {
    b () {
        c () {
            throw "XXXX"
        }
    }
}
- chain of responsability
application (website) ----> (fetch API, Canvas API, Audio API, Geolocation API)

application -> logic ---> fail
            <--- throw exception
 3) script <fetch /multiple sources 

 I) De adaugat inca un cimp care cere Nume/Prenume si nr. de telefon
 II) Codul trebuie sa extraga numele si prenumele separat
 III) Sa se extraga numarul de telefon (js regular expressions)
 // verificam daca are mai mult de 5 simboluri fara spatiu
 // sa contina doar litere latine A..Z
 // Daca numele nu corespunde cerintele -> throw 'InvalidFullName'
 // phone -> sa inceapa cu +373 dupa care urmeaza 8 cifre
 // Daca numarul nu corespunde -> throw 'InvalidPhoneNumber'

Javascript - Observer - PubSub
(DECOUPLED logic/ Weak Links)  
PubSub
EventEmitter 
    FE * DOM / HTMLDivElement
    FE * DOM / HTMLAnchorElement
Publisher <--------> Subscriber
(emmit) ---> events --> (listen)

-------- PROBLEM !!! ---------
const my__object = {}