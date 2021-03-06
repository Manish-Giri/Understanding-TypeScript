/**
 * Created by manishgiri on 11/28/16.
 */
namespace section8 {
    // simple generic
    function echo(data: any) {
        return data;
    }

    console.log(echo("Max"));
    console.log(echo(27));

    // better generic
    function betterEcho<T>(data: T) {
        return data;
    }

    console.log(betterEcho("John"));
    console.log(betterEcho(27));

    console.log("****************************");
    // ARRAYS - GENERICS

    let testResults: Array<number> = [1, 2, 4];
    testResults.push(10);
    // error
    // testResults.push("one");
    console.log(testResults);

    console.log("****************************");
    // GENERIC TYPES
    const echo2: <T>(data: T) => T = betterEcho;
    echo2("Hi");

    console.log("****************************");
    // CONSTRAINTS WITH GENERICS

    class SimpleMath<T extends Number> {
        baseValue: T;
        multiplyValue: T;
        calculate(): number {
            return +this.baseValue * +this.multiplyValue;
        }
    }

    let simpleMath = new SimpleMath<number>();
    simpleMath.baseValue = 10;
    simpleMath.multiplyValue = 20;
    console.log(simpleMath.calculate());

}
