using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RxNetMath
{
	internal class MyObserver<T> : IObserver<T>
	{
		private string _name = null;
		public MyObserver(string subscriberName = "Subscriber 1")
		{
			_name = subscriberName;
		}
		public void OnNext(T value)
		{
			Console.WriteLine($"{_name} received: {value}");
		}

		public void OnError(Exception error)
		{
			Console.WriteLine($"An error occurred while {_name} was observing: {error.Message}");
		}

		public void OnCompleted()
		{
			Console.WriteLine($"Observation completed by {_name}.");
		}
	}
}
