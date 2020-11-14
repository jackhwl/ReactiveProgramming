using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RxNetMath
{
	class Observer0 : IObserver<int>
	{
		public void OnNext(int value)
		{
			var threadId = Thread.CurrentThread.ManagedThreadId.ToString();
			Console.WriteLine($"Value received on thread {threadId}: {value}");
		}

		public void OnError(Exception error)
		{
			var threadId = Thread.CurrentThread.ManagedThreadId.ToString();
			Console.WriteLine($"Error reported on thread {threadId}: {error.Message}");
		}

		public void OnCompleted()
		{
			var threadId = Thread.CurrentThread.ManagedThreadId.ToString();
			Console.WriteLine($"Observation completed on thread {threadId}.");
		}
	}
}
