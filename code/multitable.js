// JavaScript Program to Display the Multiplication Table

function multable(num) {
    for (let i = 0; i <= 10; i++) {
        const result = i * num;
        console.log(`${num} x ${i} = ${result}`);
    }
}

multable(5); // Example usage: prints the table of 5


function multableRange(start, end) {
    for (let num = start; num <= end; num++) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }
}

multableRange(2, 4); // Change 2 and 4 to your desired range
