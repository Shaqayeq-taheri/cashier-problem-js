# Der Kassierer

In diesem Projekt sollen Sie eine Kasse für ein Geschäft implementieren, und zwar mithilfe einer JavaScript-Klasse. Die Kasse sollte in der Lage sein, das Rückgeld für einen Kunden zu berechnen, nachdem dieser einen Kauf getätigt hat.

### Anforderungen:

1. Sie sollten eine Klasse namens `CashCounter` erstellen. Der Konstruktor dieser Klasse sollte ein Objekt initialisieren, das das in der Kasse verfügbare Geld repräsentiert. Dieses Objekt sollte Schlüssel haben, die die Geldscheine repräsentieren und Werte, die die Anzahl jeder Geldscheinart repräsentieren. Die Kasse sollte mit den folgenden Geldscheinen und Mengen starten:

    - '50': 10
    - '20': 10
    - '10': 10
    - '5': 25
    - '2': 25
    - '1': 25
    - '0.50': 25
    - '0.20': 25
    - '0.10': 25
    - '0.05': 25
    - '0.02': 25
    - '0.01': 25

2. Die Klasse CashCounter sollte eine Methode namens calculateChange(price, paid) haben. Diese Methode sollte zwei Argumente entgegennehmen:
    - `price`: Der Preis des vom Kunden gekauften Artikels.
    - `paid`: Der Betrag, den der Kunde gegeben hat.

3. Die Methode `calculateChange(price, paid)` sollte:
    - Nur folgende Stückelungen als gezahlten Betrag akzeptieren: 1, 2, 5, 10, 20 oder 50. Wenn der gezahlte Betrag etwas anderes ist, sollte sie die Nachricht zurückgeben: `Wir akzeptieren nur die Beträge 1, 2, 5, 10, 20, 50`.

    - Überprüfen, ob der Kunde genug bezahlt hat, um den Preis des Artikels zu decken. Wenn nicht, sollte sie eine Nachricht zurückgeben: `Der Kunde muss noch €xx mehr zahlen`.

    - Den gezahlten Betrag zur richtigen Stückelung in die Kasse hinzufügen.
    Wenn der Preis gleich dem gezahlten Betrag ist, geben Sie eine Nachricht zurück: `Wechselgeld: 0, Kasse geschlossen`.

    - Das dem Kunden zustehende Wechselgeld berechnen, beginnend mit der höchsten Stückelung. Den entsprechenden Betrag von jeder Stückelung in der Kasse abziehen, wenn sie als Wechselgeld verwendet wird.

    - Wenn es nicht möglich ist, das genaue Wechselgeld zu geben (weil die Kasse nicht die richtigen Stückelungen hat), sollte sie die Nachricht zurückgeben: `Kein exaktes Wechselgeld verfügbar`.

    - Wenn es möglich ist, das genaue Wechselgeld zu geben, sollte sie ein Objekt zurückgeben, das die Stückelungen und die Menge jeder als Wechselgeld zu gebenden Stückelung anzeigt.

### Beispiele:

```js
const cashCounter = new CashCounter();

console.log(cashCounter.calculateChange(1, 50)); // { '2': 2, '5': 1, '20': 2 }
console.log(cashCounter.calculateChange(33.33, 50)); // { '1': 1, '5': 1, '10': 1, '0.5': 1, '0.1': 1, '0.05': 1, '0.02': 1 }
console.log(cashCounter.calculateChange(46.67, 50)) // { '1': 1, '2': 1, '0.2': 1, '0.1': 1, '0.02': 1, '0.01': 1 }
```

### Anmerkungen:

Denken Sie daran, dass die Ausgabe der Methode `calculateChange(price, paid)` vom Zustand der Kasse zum Zeitpunkt des Aufrufs abhängt. Die oben genannten Beispiele gehen von einer Kasse aus, die gerade erst initialisiert wurde.

Viel Glück!