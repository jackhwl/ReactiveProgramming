using System;
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

			var threadId = Thread.CurrentThread.ManagedThreadId.ToString();
			Console.WriteLine($"Program started on main thread with Id {threadId}...");

			var observable = Observable.Range(5,8);
			var subscription = observable.Subscribe(new Observer());

			Console.ReadKey();

			subscription.Dispose();
		}
	}
}
