import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../components/ConversationList/SearchBar";
import ConversationSnippet from "../components/ConversationList/ConversationSnippet";
import FiltersBar from "../components/ConversationList/FiltersBar";
import TopNav from "../components/Navigation/TopNav";
import BottomNav from "../components/Navigation/BottomNav";
import Chat from "../components/Chat";
import ChatInput from "../Chat/ChatInput";
import { useAuth } from "../util/auth.js";
import { useRouter } from "next/router";

// get in firebase
import firebase from "../util/firebase";

const Inbox = () => {
  const auth = useAuth();
  const user = auth.user;
  const router = useRouter();
  const firestore = firebase.firestore();
  const messagesEndRef = useRef(null);
  const [conversations, setConversations] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [messageValue, setMessageValue] = useState("");

  const handleChangeValue = (event) => {
    setMessageValue(event.target.value);
  };

  const scrollToBottom = () => {
    if (user) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // create a message and add to a conversatino
  const createMessage = async () => {
    setMessageValue("");
    // create a message document and add it to the collection
    const conversationRef = firestore
      .collection("conversations")
      .doc(currentConversation.id);
    const messagesRef = conversationRef.collection("messages");
    messagesRef.add({
      content: messageValue,
      timestamp: firebase.firestore.Timestamp.now(),
      uid: user.uid,
      from: {
        name: user.displayName,
      },
      fromLead: user.userType === "lead" ? true : false,
    });
    // update the collection's last message
    let lastMessage = {
      content: messageValue,
      fromLead: user.userType === "lead" ? true : false,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    conversationRef.update({
      lastMessage,
    });
  };
  // get chat
  const getConversations = async () => {
    const conversations = [];
    try {
      if (user) {
        console.log(user);
        await firestore
          .collection("conversations")
          .where(
            `${user.userType == "lead" ? "leadId" : "workspaceId"}`,
            "==",
            `${user.userType == "lead" ? user.uid : "1"}`
          )
          .get()
          .then((documentSet) => {
            if (documentSet !== null) {
              documentSet.forEach((doc) => {
                conversations.push({
                  id: doc.id,
                  ...doc.data(),
                });
              });
              setConversations(conversations);
            }
            return conversations;
          });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getMessages = async () => {
    const messages = [];
    console.log("current convo id");
    console.log(currentConversation.id);
    try {
      await firestore
        .collection("conversations")
        .doc(currentConversation.id)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .get()
        .then((documentSet) => {
          if (documentSet !== null) {
            documentSet.forEach((doc) => {
              messages.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            setMessages(messages);
          }
          return messages;
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(scrollToBottom, [currentConversation, messages]);
  useEffect(() => {
    getConversations();
    const unsubscribe = firestore
      .collection("conversations")
      .onSnapshot(getConversations);

    // handles the cleanup
    return () => {
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    if (currentConversation) {
      getMessages();
      const unsubscribe = firestore
        .collection("conversations")
        .doc(currentConversation.id)
        .collection("messages")
        .onSnapshot(getMessages);
      // handles the cleanup
      return () => {
        unsubscribe();
      };
    }
  }, [currentConversation]);
  const setConversation = (id) => {
    let conversation = conversations.filter((convo) => convo.id == id);
    setCurrentConversation(conversation[0]);
  };

  // Redirect to /signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/signin");
    }
  }, [auth, router]);
  if (!auth.user) {
    return <div>Blank /signin component</div>;
  }
  if (auth.user) {
    return (
      <div className="relative flex flex-col flex-grow flex-shrink-0 h-full antialiased">
        <div className="px-12 mt-12 hidden md:block">
          <TopNav />
        </div>
        <div className="relative font-sans antialiased h-full mt-0 ml-4 mr-3 mb-2 rounded-lg  bg-white overflow-hidden flex">
          {/* DM Menu (conversation list) - shows on mobile and large screens - it's always the base */}
          <div
            className={`${
              currentConversation && "hidden sm:flex"
            } flex relative h-full w-full z-10 sm:w-336px flex-col  sm:flex-shrink-0 bg-white overflow-hidden `}
          >
            <div className="text-white mb-2 ml-2 mr-2 flex justify-between">
              <div className="flex-auto ">
                {/* Menu Header */}
                <SearchBar />
                <FiltersBar />
              </div>
            </div>
            {/* Menu Item (conversation snippet eventually) */}
            <div className="pb-20 sm:flex-1 sm:pb-8 overflow-y-scroll">
              {conversations &&
                conversations.map((conversation) => {
                  return (
                    <ConversationSnippet
                      setConversation={setConversation}
                      conversation={conversation}
                    />
                  );
                })}
            </div>
          </div>
          {/* chat view  */}
          <div class="relative z-30 flex flex-col w-0 flex-1 overflow-hidden">
            <div class="relative flex-shrink-0 flex h-10 bg-white">
              <button
                onClick={() => setCurrentConversation(null)}
                class="block sm:hidden px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
                aria-label="Open sidebar"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </button>
              <div class="flex-1 px-6 flex justify-between">
                <div class="flex-1 flex">
                  <div class="max-w-7xl">
                    <h1 class="text-2xl font-semibold text-gray-900">
                      {currentConversation && currentConversation.lead.name}
                    </h1>
                  </div>
                </div>
                <div class="ml-4 flex items-center md:ml-6">
                  <button
                    class="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500"
                    aria-label="Notifications"
                  >
                    <svg
                      class="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <main
              class="flex-1 relative z-30 overflow-y-auto pb-6 focus:outline-none"
              tabindex="0"
            >
              <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* <!-- Replace with your content --> */}
                <div class="py-4">
                  {/* map over message docs and put into chat */}
                  {messages &&
                    messages.map((message) => <Chat message={message} />)}
                  <div ref={messagesEndRef} />
                </div>
                {/* <!-- /End replace --> */}
              </div>
            </main>
            <ChatInput
              value={messageValue}
              handleChangeValue={handleChangeValue}
              createMessage={createMessage}
            />
          </div>
        </div>
        <div
          className={`${
            currentConversation && "hidden sm:flex"
          } flex w-full md:hidden`}
        >
          <BottomNav />
        </div>
      </div>
    );
  }
};
export default Inbox;
