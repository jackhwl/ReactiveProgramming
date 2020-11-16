using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reactive;
using System.Reactive.Linq;

namespace RxNetMath
{
	class ReactiveSocialNetworksManager
	{
		public IObservable<Message> ObserveMessages(string hashtag)
		{
			return Observable.Create<Message>(async (observer) =>
			{
				var message = await GetMessagesAsync(hashtag);
				foreach (var m in ObserveMessages)
				{
					observer.OnNext(m);
				}
				observer.OnCompleted();
			});

			//var messages = await GetMessagesAsync(hashtag);
			//return messages.ToObservable();
		}
	}

	public class Message
	{
	}
}
