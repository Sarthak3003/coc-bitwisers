from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.
import razorpay
import pywhatkit
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt


def home(request):
    if request.method == "POST":
        name = request.POST.get('name')
        amount = 50000

        client = razorpay.Client(auth=("rzp_test_P5uGKApOVIZYNS", "exvuLddqfWuRzGalMZwwinlw"))
        payment = client.order.create({'amount': amount, 'currency': 'INR', 'payment_capture': '1'})

    return render(request, 'pay_index.html')

def donate(request):
    if request.method == "POST":
        name = request.POST.get('name')
        amount = 50000

        client = razorpay.Client(auth=("rzp_test_P5uGKApOVIZYNS", "exvuLddqfWuRzGalMZwwinlw"))
        payment = client.order.create({'amount': amount, 'currency': 'INR', 'payment_capture': '1'})

    return render(request, 'donate_index.html')

def message(request):
    currentDateAndTime = datetime.now()
    hour = currentDateAndTime.hour
    minute = currentDateAndTime.minute + 1
    doc_name = "Sarthak"
    number = '+917045141518'
    message = "Your meeting has been scheduled with Dr. " + doc_name + "on 23rd Jan, 2023 at 11:15am. Best Wishes :)"
    pywhatkit.sendwhatmsg_instantly(number, message)

    return redirect('http://localhost:3000')

@csrf_exempt
def success(request):
    return render(request, "pay_success.html")

@csrf_exempt
def success(request):
    return render(request, "pay_success.html")