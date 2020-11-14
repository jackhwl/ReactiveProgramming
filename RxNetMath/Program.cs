using System;
using System.Reactive;
using System.Reactive.Linq;
using System.Threading;

namespace RxNetMath
{
	class Program
	{
		static void Main(string[] args)
		{
			// https://www.dofactory.com/net/observer-design-pattern
			// https://www.youtube.com/watch?v=kgpUrk1t5xM&list=PLHfwoPeLRqw7XOffuusep6CJRo6Yh6IYq&index=3
			// https://sachabarbs.wordpress.com/2016/12/23/rx-over-the-wire/

			//Demo();
			ObserverBaseMitigatesContractViolation1();

			//var threadId = Thread.CurrentThread.ManagedThreadId.ToString();
			//Console.WriteLine($"Program started on main thread with Id {threadId}...");

			//var observable = Observable.Range(5,8);

			//IObserver<int> observer = Observer.Create<int>(
			//	Console.WriteLine,
			//	(error) => { Console.WriteLine($"Error: {error.Message}"); },
			//	() => { Console.WriteLine("Observation complete"); }
			//);
			//var subscription = observable.Subscribe(observer);

			//Console.ReadKey();

			//subscription.Dispose();
		}

		static void Demo() {
			var observable = new MyRangeObservable(5, 8);
			var observer = new MyObserver<int>();
			var subscription = observable.Subscribe(observer);

			Console.WriteLine("Press any key to dispose the subscription.");
			Console.ReadKey();
			subscription.Dispose();
		}
		
		static void ObserverBaseMitigatesContractViolation2()
		{
			var observable = Observable.Range(5, 8);

			var observer = Observer.Create<int>(
				Console.WriteLine,
				ex => Console.WriteLine(ex.Message),
				() => Console.WriteLine("Complete")
			);

			var subscription = observable.Subscribe(observer);

			Console.ReadKey();

			subscription.Dispose();
		}
		static void ObserverBaseMitigatesContractViolation1()
		{
			var observable = Observable.Range(5, 8);

			var subscription = observable.Subscribe(
				Console.WriteLine,
				ex => Console.WriteLine(ex.Message),
				() => Console.WriteLine("Complete")
			);

			Console.ReadKey();

			subscription.Dispose();
		}

	}
}
