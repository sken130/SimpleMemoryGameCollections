using SimpleMemoryGameCollections.ViewModels;
using System.ComponentModel;
using Xamarin.Forms;

namespace SimpleMemoryGameCollections.Views
{
    public partial class ItemDetailPage : ContentPage
    {
        public ItemDetailPage()
        {
            InitializeComponent();
            BindingContext = new ItemDetailViewModel();
        }
    }
}