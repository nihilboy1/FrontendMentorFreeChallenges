"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { notificationsData, Notification } from "./data/data";
import { timeSince } from "./utils/utils";

export default function Home() {
  const [notifications, setNotifications] =
    useState<Notification[]>(notificationsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications([...notificationsData]);
    }, 60000 * 5);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="mx-auto sm:my-8 rounded-xl bg-white min-h-[100vh] p-4 max-w-[39rem] transition-all">
      <header className="mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="font-black text-lg">Notifications</h1>
          <span className="bg-blue-900 text-white font-black py-[0.2rem] px-[0.8rem] rounded-lg">
            {notifications.filter((notification) => !notification.read).length}
          </span>
        </div>
        <button className="opacity-75 hover:text-blue-900 hover:opacity-100">
          Mark all as read
        </button>
      </header>
      {notifications.map((item, index) => {
        return (
          <section
            key={index}
            className={`gap-4 mb-3 p-4 min-h-[6rem] rounded-lg ${
              item.read ? "bg-white" : "bg-cyan-50"
            } flex items-start justify-start`}
          >
            <Image
              src={item.avatar}
              width={45}
              height={45}
              alt="avatar image"
            />
            <div className="text-[0.9rem]">
              <div>
                <h2 className="inline font-bold mr-1">{item.name}</h2>
                <p className="inline mr-1 opacity-75">{item.action}</p>
                {item.target?.name && (
                  <p
                    className={`cursor-pointer hover:text-blue-900 hover:opacity-100 inline font-bold opacity-75 mr-1 ${
                      item.target?.type == "group" &&
                      "text-blue-900 opacity-100"
                    } `}
                  >
                    {item.target?.name}
                  </p>
                )}
                {!item.read && (
                  <Image
                    src="/circle-fill.svg"
                    width={8}
                    height={8}
                    className="inline opacity-75"
                    alt="not read notification"
                  />
                )}
              </div>
              <span className="opacity-75 ">
                {timeSince(new Date(item.date))}
              </span>
              {item.target?.content && (
                <div className="hover:bg-blue-50 cursor-pointer mt-2 border min-h-[6rem] p-4 text-[1.01rem] rounded-md opacity-75">
                  {item.target.content}
                </div>
              )}
            </div>
            {item.target?.picture && (
              <Image
                src={item.target.picture}
                width={45}
                height={45}
                alt="avatar image"
                className="cursor-pointer ml-auto border-2 border-blue-900 rounded-lg border-opacity-75 hover:border-opacity-100"
              />
            )}
          </section>
        );
      })}
    </main>
  );
}
